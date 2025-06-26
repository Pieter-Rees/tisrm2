import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.json();
        
        // Add the tisrm flag if not present
        if (!formData.tisrm) {
            formData.tisrm = true;
        }

        const response = await fetch('https://pieterrees.nl/email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        return NextResponse.json({ 
            success: true, 
            message: 'Form submitted successfully',
            data: result 
        });

    } catch (error) {
        console.error('Email API error:', error);
        
        return NextResponse.json(
            { 
                success: false, 
                message: 'Failed to submit form',
                error: error.message 
            },
            { status: 500 }
        );
    }
} 