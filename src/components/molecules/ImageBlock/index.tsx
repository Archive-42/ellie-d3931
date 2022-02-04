import * as React from 'react';
import classNames from 'classnames';

export default function ImageBlock(props) {
    const { url, altText } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@src`,
        `${annotationPrefix}.altText#@alt`,
        `${annotationPrefix}.elementId#@id`
    ];

    return (
        
    );
}
