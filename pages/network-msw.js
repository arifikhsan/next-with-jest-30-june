import axios from "axios";

export async function getServerSideProps(context) {
  const response = await axios.get("https://api.github.com/users/octocat");
  return {props: {data: response.data}};
}

export default function NetworkMSW({data}) {
  return <p>{data.name}</p>
}