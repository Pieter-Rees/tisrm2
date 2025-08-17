'use client'

import React from 'react';
import Link from 'next/link';

const Card = ({ title, description, image, altText, downloadLink, cta, ctaLink, phone, buttonVariant = 'solid', variant }) => {
    const hasCta = cta || phone || downloadLink;
    
    const getCardStyles = () => {
        switch (variant) {
            case 'sidebar':
                return { border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", backgroundColor: "white" };
            case 'downloads':
                return { border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", backgroundColor: "#f7fafc" };
            default:
                return { border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" };
        }
    };

    return (
        <div style={getCardStyles()}>
            <div style={{ padding: "16px" }}>
                {image &&
                    <div style={{ 
                        overflow: 'hidden', 
                        borderTopLeftRadius: '8px', 
                        borderTopRightRadius: '8px',
                        backgroundImage: `url(${image})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center center', 
                        height: '200px' 
                    }}>
                    </div>
                }
                {title &&
                    <div>
                        <h2 style={{ margin: '0', fontSize: "24px", fontWeight: "bold", padding: '0 16px', marginTop: '16px' }}>{title}</h2>
                    </div>}
            </div>
            {description && <div style={{ padding: "16px", paddingTop: "0" }}><p style={{ margin: '0' }}>{description}</p></div>}

            {hasCta &&
                <div style={{ padding: "16px", paddingTop: "0" }}>
                    {cta && ctaLink &&
                        <Link href={ctaLink}>
                            <button style={{ 
                                width: '100%', 
                                padding: '8px 16px', 
                                backgroundColor: buttonVariant === 'blue' ? '#3182ce' : '#e2e8f0',
                                color: buttonVariant === 'blue' ? 'white' : 'black',
                                border: 'none', 
                                borderRadius: '4px', 
                                cursor: 'pointer' 
                            }}>
                                {cta}
                            </button>
                        </Link>}
                    {phone && 
                        <Link href={phone}>
                            <button style={{ 
                                width: '100%', 
                                padding: '8px 16px', 
                                backgroundColor: buttonVariant === 'blue' ? '#3182ce' : '#e2e8f0',
                                color: buttonVariant === 'blue' ? 'white' : 'black',
                                border: 'none', 
                                borderRadius: '4px', 
                                cursor: 'pointer' 
                            }}>
                                Bel ons nu
                            </button>
                        </Link>}
                    {downloadLink && 
                        <Link href={downloadLink}>
                            <button style={{ 
                                width: '100%', 
                                padding: '8px 16px', 
                                backgroundColor: buttonVariant === 'blue' ? '#3182ce' : '#e2e8f0',
                                color: buttonVariant === 'blue' ? 'white' : 'black',
                                border: 'none', 
                                borderRadius: '4px', 
                                cursor: 'pointer' 
                            }}>
                                Download
                            </button>
                        </Link>}
                </div>}
        </div>
    );
};

export default Card;