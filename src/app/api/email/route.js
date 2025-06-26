import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.json();
        
        // Add the tisrm flag if not present
        if (!formData.tisrm) {
            formData.tisrm = true;
        }

        console.log('Forwarding form data to external API:', formData);

        // Try multiple endpoints in case one is down
        const endpoints = [
            'https://pieterrees.nl/email/',
            'https://www.pieterrees.nl/email'
        ];

        let lastError = null;
        let response = null;

        for (const endpoint of endpoints) {
            try {
                console.log(`Trying endpoint: ${endpoint}`);
                
                // Add timeout and better error handling
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

                response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'TISRM-Website/1.0'
                    },
                    body: JSON.stringify(formData),
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                console.log(`Endpoint ${endpoint} response status:`, response.status);
                
                // If we get a successful response, break out of the loop
                if (response.ok) {
                    console.log(`Success with endpoint: ${endpoint}`);
                    break;
                }
                
                // If we get a 502, try the next endpoint
                if (response.status === 502) {
                    console.log(`Endpoint ${endpoint} returned 502, trying next endpoint`);
                    lastError = new Error(`Endpoint ${endpoint} returned 502 Bad Gateway`);
                    continue;
                }
                
                // For other errors, break and handle them
                break;

            } catch (fetchError) {
                console.log(`Error with endpoint ${endpoint}:`, fetchError.message);
                lastError = fetchError;
                
                // If it's a timeout or network error, try the next endpoint
                if (fetchError.name === 'AbortError' || 
                    fetchError.code === 'ENOTFOUND' || 
                    fetchError.code === 'ECONNREFUSED') {
                    continue;
                }
                
                // For other errors, break and handle them
                break;
            }
        }

        // If we have a response, handle it
        if (response) {
            console.log('External API response status:', response.status);
            console.log('External API response headers:', Object.fromEntries(response.headers.entries()));

            if (response.ok) {
                // Try to parse JSON response, but don't fail if it's not JSON
                let result;
                const contentType = response.headers.get('content-type');
                
                if (contentType && contentType.includes('application/json')) {
                    try {
                        result = await response.json();
                    } catch (jsonError) {
                        console.warn('Failed to parse JSON response:', jsonError);
                        result = { message: 'Success (non-JSON response)' };
                    }
                } else {
                    // Handle non-JSON responses
                    const text = await response.text();
                    result = { message: 'Success', responseText: text };
                }
                
                return NextResponse.json({ 
                    success: true, 
                    message: 'Form submitted successfully',
                    data: result 
                });
            } else {
                // Handle HTTP error responses
                let errorData;
                try {
                    errorData = await response.json();
                } catch {
                    const text = await response.text();
                    errorData = { 
                        message: `HTTP ${response.status}: ${response.statusText}`,
                        responseText: text
                    };
                }
                
                console.error('External API error response:', errorData);
                
                return NextResponse.json(
                    { 
                        success: false, 
                        message: 'External API returned an error',
                        error: errorData 
                    },
                    { status: response.status }
                );
            }
        } else {
            // All endpoints failed
            throw lastError || new Error('All external API endpoints failed');
        }

    } catch (error) {
        console.error('Email API error:', error);
        
        // Provide more specific error messages
        let errorMessage = 'Failed to submit form';
        let statusCode = 500;
        
        if (error.name === 'AbortError') {
            errorMessage = 'Request timeout: External API took too long to respond';
            statusCode = 504;
        } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage = 'Network error: Unable to reach external API';
        } else if (error.name === 'SyntaxError') {
            errorMessage = 'Invalid response format from external API';
        } else if (error.code === 'ENOTFOUND') {
            errorMessage = 'DNS error: Cannot resolve external API hostname';
        } else if (error.code === 'ECONNREFUSED') {
            errorMessage = 'Connection refused: External API server is not accepting connections';
        } else if (error.message.includes('502')) {
            errorMessage = 'External email service is currently unavailable. Please try again later or contact us directly.';
            statusCode = 503;
        }
        
        return NextResponse.json(
            { 
                success: false, 
                message: errorMessage,
                error: error.message,
                errorCode: error.code,
                errorName: error.name
            },
            { status: statusCode }
        );
    }
} 