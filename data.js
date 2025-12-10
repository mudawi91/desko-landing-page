const tickets = [
  {
    id: 1,
    title: "Email not syncing",
    description: "Outlook has stopped syncing new emails since yesterday.",
    priority: "high",
    category: "Email",
    status: "Open"
  },
  {
    id: 2,
    title: "VPN Connection Issue",
    description: "Unable to connect to the corporate VPN.",
    priority: "medium",
    category: "Network",
    status: "In Progress"
  },
  {
    // TICKET ID 3 IS NOW IN ARABIC (RTL)
    id: 3,
    title: "الطابعة لا تعمل", // The printer is not working
    description: "الطابعة المكتبية تعرض رمز خطأ غريب ولا تطبع أي شيء.", // The office printer displays a strange error code and is not printing anything.
    priority: "low",
    category: "Hardware",
    status: "Open"
  }
];