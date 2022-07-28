import React, { useState } from 'react'
import { Text, RichText, types } from 'react-bricks/frontend'

function TitleAndDescription({ padding, title_font_size }) {
    return (
        <div className={`max-w-6xl mx-auto px-6 py-4`}>
            <div>
                <Text
                    renderBlock={(props) => (
                        title_font_size === 'h1' ? 
                        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-3">
                            {props.children}
                        </h1>
                        :
                        <h3 className="text-3xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight mb-3">
                            {props.children}
                        </h3>
                    )}
                    placeholder="Type a title..."
                    propName="title"
                />
                <RichText
                    renderBlock={(props) => (
                        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-100">
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
            </div>
        </div>
    )
}

TitleAndDescription.schema = {
    name: 'title-description',
    label: 'Custom Title-description',
    getDefaultProps: () => ({
        padding: 'big',
        title: 'This is a Contact us form',
        text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    }),
    sideEditProps: [
        {
            name: 'alignment',
            label: 'alignment',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Select,
                options: [
                    { value: '', label: 'Left' },
                    { value: 'text-center', label: 'Center' },
                    { value: 'text-right', label: 'Right' },
                ],
            },
        },
        {
            name: 'title_font_size',
            label: 'title font size',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Select,
                options: [
                    { value: 'h3', label: 'H3' },
                    { value: 'h2', label: 'H2' },
                    { value: 'h1', label: 'H1' },
                ],
            },
        },
    ],
}

export default TitleAndDescription;
