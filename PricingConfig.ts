
export type PricingConfig = typeof pricingConfig'
export interface Pricing {
    uniqueId: Number,
    pricingType: String,
    features: string[],
    monthlyAmount: String,
    yearlyAmount: String
}
export const pricingConfig: Pricing[] = [
    {
        uniqueId: 1,
        pricingType: "Fundamental",
        features: [
            "Access to basic AI tools",
            "5 AI chat sessions per day",
            "Community support",
            "Basic analytics dashboard",
            "Email support (48h response time)"
        ],
        monthlyAmount: "₹499",
        yearlyAmount: "₹4,999",
    },
    {
        uniqueId: 2,
        pricingType: "Professional",
        features: [
            "Everything in Fundamental",
            "50GB cloud storage",
            "Advanced analytics & reports",
            "Priority email & chat support",
            "Customizable dashboard",
            "API access with 10,000 requests/month",
            "Team collaboration tools",
            "Automated backups",
            "Integration with Slack & Google Workspace",
            "Two-factor authentication (2FA)",
        ],
        monthlyAmount: "₹1,499",
        yearlyAmount: "₹14,499",
    },
    {
        uniqueId: 3,
        pricingType: "Enterprise",
        features: [
           "Everything in Professional",
            "Unlimited cloud storage",
            "Dedicated account manager",
            "Custom API limits & SLAs",
            "Enterprise-grade security & compliance",
            "Custom onboarding & training",
            "Integration with any third-party service",
            "White-label branding",
            "24/7 priority phone support",
            "Custom workflow automation",
            "Access to beta features first",
            "Multi-region hosting options",
        ],
        monthlyAmount: "₹4,999",
        yearlyAmount: "₹49,999",
    },
];
