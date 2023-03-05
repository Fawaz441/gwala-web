import React from 'react'
import isEmail from 'validator/lib/isEmail'
import { useForm } from 'react-hook-form'

const getInputClassNames = hasError => `py-3 text-primary text-[18px] px-4 h-[52px] block w-full border-2 border-gray-200 rounded-md focus:border-primary ${hasError ? "!border-[red] focus:!border-[red] !outline-red font-sans800 !text-[red]" : ""}`

const EmailInput = ({ proceed, hide }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = data => {
        proceed(data.email)
    }

    return (
        <div className='fixed cursor-pointer top-0 left-0 h-screen w-full bg-black/[.6]'
            onClick={hide}
        >
            <main id="content" role="main" class="w-full max-w-md mx-auto p-6">
                <div
                    onClick={e => e.stopPropagation()}
                    class="mt-7 bg-white  rounded-xl shadow-lg cursor-default">
                    <div class="p-4 sm:p-7">
                        <div class="text-center">
                            <p class="mt-2 text-xl font-sans800 text-primary">
                                Please enter in your email to proceed
                            </p>
                        </div>
                        <div class="mt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="grid gap-y-4">
                                    <div>
                                        <label htmlFor="email" class="block text-sm text-primary font-sans400 ml-1 mb-2">Email address</label>
                                        <div class="relative">
                                            <input
                                                autoFocus
                                                id="email"
                                                name="email"
                                                class={getInputClassNames(!!errors.email)}
                                                required aria-describedby="email-error"
                                                {...register("email", { required: true, validate: v => isEmail(v?.trim()) })}
                                            />
                                        </div>
                                        {!!errors.email &&
                                            <p class="text-xs text-red-600 mt-2" id="email-error">Please enter a valid email address</p>
                                        }
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <button
                                            type="submit"
                                            className="mb-[13px] rounded-[30px] text-white flex items-center justify-center bg-primary font-sans400 text-[22px] h-[62px] w-[200px] lg:w-[322px]">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EmailInput