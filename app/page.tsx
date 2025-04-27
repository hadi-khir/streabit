import { neon } from "@neondatabase/serverless";
import Login from "./components/Login";
export default function App() {


  async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');
    // Insert the comment from the form into the Postgres database
    await sql`INSERT INTO streabit_comments (comment) VALUES (${comment})`;
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 flex-col">
      <Login />
      <br />
      <form action={create}>
        <input className="border-2 border-gray-300 rounded-md p-2 text-black" type="text" placeholder="write a comment" name="comment" />
        <button className="bg-blue-500 text-black p-2 rounded-md" type="submit">Submit</button>
      </form>
    </main>
  );
}
