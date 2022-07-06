export function getServerSideProps(context) {
  return { props: { name: 'Next.js' } };
}

export default function Home() {
  return <p>Welcome to Next.js!</p>
}
