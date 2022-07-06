import axios from "axios";

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://api.github.com/users/octocat");
    return {props: {data: response.data}};
  } catch (error) {
    showErrorToast(error.message)
    return error;
  }
}

export function showErrorToast(message) {
  // logic to show error toast
  console.log(`called with ${message}`)
}

export default function NetworkError({data}) {
  return <p>{data.name}</p>
}
