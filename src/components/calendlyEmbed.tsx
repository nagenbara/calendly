import React from 'react';

interface CalendlyEmbedProps {
    url: string;
    height?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, height = "800px" }) => {
    return (
        <div className="calendly-inline-widget" style={{ width: '100%', height }}>
            <iframe
                src={url}
                width="100%"
                height="100%"
            ></iframe>
        </div>
    );
};

export default CalendlyEmbed;
