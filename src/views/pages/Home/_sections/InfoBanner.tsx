function InfoBanner({ title, description }:InfoBannerProps) {
    return (
        <div className="bg-[#7a8dc8] text-white text-center py-28">
        <div className="max-w-[630px] mx-auto">

            <h2 className="text-4xl">{title}</h2>
            {description && <p className="mt-6">{description}</p>}

        </div>
        </div>
    )
}

export default InfoBanner;

interface InfoBannerProps {
    title: string;
    description?: string;
}