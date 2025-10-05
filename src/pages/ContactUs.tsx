import { useEffect } from "react"
import DefaultLayout from "@/layouts/default"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/components/Footer"
function ContactUs() {

    useEffect(() => {
        window.scrollTo(0 , 0)
      }, [])
  return (
    <>
        <DefaultLayout>
      <div className="text-center">
        <h1 className="Inter-bold text-4xl lg:text-8xl">Contact Us</h1>
        <p className="pt-1 Inter-medium text-[18px] lg:px-20 px-6 ">Get in touch with us to learn more about our services and how we can help you.</p>
      </div>
      <div className='w-full py-20 container mx-auto px-6'>
      <div>
        <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
            <div className="z-20 bg-white dark:bg-neutral-900 w-full h-auto p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg">
              <form>
                  <div className="mt-6">
                      <Label className="text-sm font-medium pb-1" htmlFor="first-name">First Name*</Label>
                      <Input className="h-12" id="first-name" name="first-name" type="text" required placeholder="John" />
                  </div>
                  <div className="mt-6">
                      <Label className="text-sm font-medium pb-1" htmlFor="last-name">Last Name*</Label>
                      <Input className="h-12" id="last-name" name="last-name" type="text" required placeholder="Doe"/>
                  </div>
                  <div className="mt-4">
                      <Label className="text-sm font-medium pb-1" htmlFor="email">Work Email*</Label>
                      <Input className="h-12" id="email" name="email" type="email" required placeholder="johndoe@example.com" />
                  </div> 
                  <div className="mt-4">
                      <Label className="text-sm font-medium pb-1" htmlFor="last-name">Reason for Contact*</Label>
                      <Input className="h-12" id="contectReason" name="contectReason" type="text" required/>
                  </div>
                  <div className='mt-4'>
                    <Label className="text-sm font-medium pb-1" htmlFor="last-name">Message</Label>
                    <Textarea className="h-[150px]" placeholder=''></Textarea>
                  </div>
                  <div className="mt-6 flex justify-between ">
                      <Button className="bg-neutral-950 dark:bg-white dark:text-black w-full py-8 rounded-md cursor-pointer" type="submit">Submit</Button>
                  </div>
              </form>
            </div>
          <div className='flex flex-col'>
            <h1 className='text-3xl lg:text-4xl font-bold font-sans leading-relaxed'>{`Let's Connect`}</h1>
            <p className='font-sens- font-medium text-md'>We are happy to assist you with any questions about our technology,<br /> pricing plans, custom contract options, and migrations assistance.</p>


            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-10">
            <div className="row-span-2 bg-white dark:bg-neutral-900 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-4 py-4"></div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] h-40 px-4 py-4"></div>
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] h-40 px-4 py-4"></div>

          </div>
          </div>

         
          
          
        </div>
        <div className="w-full h-auto pt-10 px-0">
            <iframe className="h-[500px] w-[100%] rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4068.167623599755!2d74.79492717629081!3d34.038910518433276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f5714259d91%3A0xf0dd777068666dce!2sLolab!5e1!3m2!1sen!2sin!4v1759703441488!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

      </div>
    </div>

    </DefaultLayout>
    <Footer />
    </>
  )
}

export default ContactUs



