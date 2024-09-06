import axios from "axios";

export default async function HomePage() {
  const data = await axios.post("https://lorem-json.com/api/json", {
    name: "{{name()}}",
    age: "{{int(25, 30)}}",
    country: "{{country()}}",
  });
  return <pre>{JSON.stringify(data.data, null, 2)}</pre>;
}
