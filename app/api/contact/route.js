export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Use Web3Forms (Free, no backend needed, works with static/Pages sites)
    // Access Key will be handled via form submission
    const formData = new FormData();
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", `New Lead: ${subject} from ${name}`);
    formData.append("message", message);
    formData.append("from_name", "Killington Getaway Leads");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ success: false, error: result.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
