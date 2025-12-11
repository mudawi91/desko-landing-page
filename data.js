const tickets = [
    {
        id: 1,
        title: "Database connection intermittent during peak hours",
        name: "Alice Johnson",
        email: "alice.j@corp.com",
        category: "Network",
        priority: "high",
        status: "open",
        timestamp: "2025-12-10T09:00:00Z",
        description: "The main production database experiences severe slowdowns and occasional timeouts every day between 10 AM and 11 AM local time. Happens only during peak user traffic.",
        ai_summary: "High priority performance degradation during scheduled peak usage. Root cause likely resource throttling or unoptimized query load during financial reconciliation period.",
        ai_action: "Initial step: Escalate to Level 3 DevOps for immediate resource monitoring. Suggest checking query logs for resource-intensive operations.",
        events: [
            { type: 'Agent Assigned', detail: 'Assigned to Agent Smith.', timestamp: '2025-12-10T09:15:00Z' },
            { type: 'Status Changed', detail: 'Status set to Processing.', timestamp: '2025-12-10T09:15:00Z' },
        ]
    },
    {
        id: 2,
        title: "Request for access to Sales Reporting Tool",
        name: "Ben Miller",
        email: "ben.m@corp.com",
        category: "Software",
        priority: "low",
        status: "closed",
        timestamp: "2025-12-09T14:30:00Z",
        description: "I need to view the latest Q4 sales reports but don't have access to the SalesForce module yet. My manager approved it.",
        ai_summary: "Standard access request. Sentiment is neutral. Low priority as it is not a blockage.",
        ai_action: "Suggested action: Auto-approve access via integration and close ticket. Requires manager confirmation.",
        events: [
            { type: 'Agent Assigned', detail: 'Agent Smith auto-assigned.', timestamp: '2025-12-09T14:35:00Z' },
            { type: 'Resolution', detail: 'User granted access to SalesForce module. Confirmation sent.', timestamp: '2025-12-09T14:45:00Z' },
            { type: 'Status Changed', detail: 'Status set to Closed by System.', timestamp: '2025-12-09T14:45:00Z' },
        ]
    }
];

// Load tickets from local storage, falling back to initial data if none exists
let storedTickets = localStorage.getItem('demoTickets');
if (!storedTickets) {
    localStorage.setItem('demoTickets', JSON.stringify(tickets));
    storedTickets = localStorage.getItem('demoTickets');
}

window.tickets = JSON.parse(storedTickets);