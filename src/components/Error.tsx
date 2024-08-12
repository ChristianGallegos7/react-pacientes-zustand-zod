
export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="bg-red-100 text-red-500 text-center border-l-4 border-red-600 py-4">
      {children}
    </p>
  )
}
