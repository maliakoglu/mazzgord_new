import Image from "next/image"

export function PaymentLogos() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="border rounded p-2 h-10 flex items-center justify-center bg-white">
        <Image src="/images/payment/visa.jpeg" alt="Visa" width={40} height={24} className="h-6 w-auto" />
      </div>
      <div className="border rounded p-2 h-10 flex items-center justify-center bg-white">
        <Image src="/images/payment/mastercard.jpeg" alt="Mastercard" width={40} height={24} className="h-6 w-auto" />
      </div>
      <div className="border rounded p-2 h-10 flex items-center justify-center bg-white">
        <Image src="/images/payment/troy.png" alt="Troy" width={40} height={24} className="h-6 w-auto" />
      </div>
      <div className="border rounded p-2 h-10 flex items-center justify-center bg-white relative group">
        <Image src="/images/payment/iyzico.png" alt="iyzico" width={40} height={24} className="h-6 w-auto" />
        <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          ✓
        </span>
      </div>
      <div className="border rounded p-2 h-10 flex items-center justify-center bg-white relative group">
        <span className="text-xs font-semibold">PayTR</span>
        <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          ✓
        </span>
      </div>
    </div>
  )
}
