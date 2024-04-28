import Link from 'next/link'
 
export default function Thanks() {
  return (
    <div>
      <h1 className="font-medium text-3xl mb-4 tracking-tighter">Thanks For Reaching Out</h1>
      <p> You will be getting a reply soon</p>
      <Link href="/">Go Back</Link>
    </div>
  )
}