import React, { useState } from 'react'
import { Text, RichText, types } from 'react-bricks/frontend'

function ContactUSForm({ padding }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (event) => {
        const form = event.target.form;
        const isValid = form.checkValidity();
        if(!isValid) {
            return
        }

        event.preventDefault();
    }

    return (
        <div className={`max-w-3xl mx-auto px-6 ${padding === 'big' ? 'py-20' : 'py-12'}`}>
            <div>
                <Text
                    renderBlock={(props) => (
                        <h1 className="text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3">
                            {props.children}
                        </h1>
                    )}
                    placeholder="Type a title..."
                    propName="title"
                />
                <RichText
                    renderBlock={(props) => (
                        <p className="text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100">
                            {props.children}
                        </p>
                    )}
                    placeholder="Type a text..."
                    propName="text"
                    allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Italic,
                        types.RichTextFeatures.Highlight,
                        types.RichTextFeatures.Code,
                        types.RichTextFeatures.Link,
                    ]}
                    renderCode={(props) => (
                        <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
                            {props.children}
                        </code>
                    )}
                />

                <form className="w-full max-w-lg m-auto" onSubmit={handleFormSubmit} style={{margin: '0 auto'}}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Your name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required 
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please fill your name</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" required 
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please fill a valid email</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" required
                                onChange={(event) => setMessage(event.target.value)}
                                value={message}
                            ></textarea>
                            {/* <p className="text-red-500 text-xs italic">Please add your message</p> */}
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="w-32 py-3 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 bg-sky-500 text-white hover:bg-sky-600 hover:text-white" type="submit" onClick={handleFormSubmit}>
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

ContactUSForm.schema = {
    name: 'contact-us-form',
    label: 'Custom Contact us form',
    getDefaultProps: () => ({
        padding: 'big',
        title: 'This is a Contact us form',
        text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    }),
    sideEditProps: [
        {
            name: 'padding',
            label: 'Padding',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Select,
                options: [
                    { value: 'big', label: 'Big Padding' },
                    { value: 'small', label: 'Small Padding' },
                ],
            },
        },
    ],
}

export default ContactUSForm;
