import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.json();
        
        // Add the tisrm flag if not present
        if (!formData.tisrm) {
            formData.tisrm = true;
        }

        console.log('Forwarding form data to external API:', formData);

        const response = await fetch('https://pieterrees.nl/email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log('External API response status:', response.status);
        console.log('External API response headers:', Object.fromEntries(response.headers.entries()));

        // Handle different response scenarios
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
                errorData = { message: `HTTP ${response.status}: ${response.statusText}` };
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

    } catch (error) {
        console.error('Email API error:', error);
        
        // Provide more specific error messages
        let errorMessage = 'Failed to submit form';
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage = 'Network error: Unable to reach external API';
        } else if (error.name === 'SyntaxError') {
            errorMessage = 'Invalid response format from external API';
        }
        
        return NextResponse.json(
            { 
                success: false, 
                message: errorMessage,
                error: error.message 
            },
            { status: 500 }
        );
    }
} 