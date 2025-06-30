// app/page.tsx
import { redirect } from 'next/navigation'

export default function RootPage() {
  // when someone hits “/”, immediately send them to “/dashboard”
  redirect('/dashboard')
}
