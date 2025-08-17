'use client'

import { contactInfo, currentYear } from "../data/general";
import FooterLogos from "@/components/footer-logos";
import Link from 'next/link'
import Logo from "@/components/logo";

export default function Footer() {
    return (
        <>
            <FooterLogos />
            <div style={{ backgroundColor: "#374151", padding: "64px 0", display: "flex", alignItems: "center" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", width: "100%" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "64px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <div>
                                <Link href="/"><Logo width='200px' /></Link>
                            </div>
                            <p style={{ color: "white", fontSize: "14px" }}>
                                © {currentYear} {contactInfo.name}. Alle rechten voorbehouden.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: "white", fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>
                                Contact
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link href='tel:+310206368191'>
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            +31 020 636 8191
                                        </button>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link href='mailto:info@tisrm.nl'>
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            info@tisrm.nl
                                        </button>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link target='_blank' rel='noopener noreferrer' href={contactInfo.linkedIn}>
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            LinkedIn
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ color: "white", fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>
                                Links
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link href="/verzekeringen">
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            Verzekeringen
                                        </button>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link href="/taxi">
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            Taxi
                                        </button>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link href="/risk-management">
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            Risk Management
                                        </button>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link href="/over-ons">
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            Over ons
                                        </button>
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link href="/contact">
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            color: "white", 
                                            border: "none", 
                                            padding: "8px 0", 
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}>
                                            Contact
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}