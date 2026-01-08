const API_URL = 'http://crypto-dev.local/graphql'; // ⚠️ Make sure this is still your correct URL

// UPGRADE: Now accepts a second argument `{ variables }`
export async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    // UPGRADE: We now include 'variables' in the request body
    body: JSON.stringify({ 
      query,
      variables 
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}