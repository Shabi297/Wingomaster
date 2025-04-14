
// Replace with your own Supabase project URL and anon/public key
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message);
  else alert('Signup successful!');
}

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else alert('Login successful!');
}

async function deposit() {
  const amount = parseFloat(document.getElementById('amount').value);
  const user = supabase.auth.getUser();
  if (amount && user) {
    const { error } = await supabase.from('deposit').insert([{ amount, user_id: user.id }]);
    if (error) alert(error.message);
    else alert('Deposit successful');
  }
}

async function withdraw() {
  const amount = parseFloat(document.getElementById('amount').value);
  const user = supabase.auth.getUser();
  if (amount && user) {
    const { error } = await supabase.from('withdraw').insert([{ amount, user_id: user.id }]);
    if (error) alert(error.message);
    else alert('Withdraw request sent');
  }
}
