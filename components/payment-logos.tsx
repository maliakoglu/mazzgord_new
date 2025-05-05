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
      <div className="border rounded p-2 h-10 flex items-center justify-center bg-white">
        <Image src="/images/payment/iyzico.png" alt="iyzico" width={40} height={24} className="h-6 w-auto" />
      </div>
    </div>
  )
}
