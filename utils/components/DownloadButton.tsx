import React from 'react';
import { useTranslation } from 'next-i18next';

interface ButtonProps {
	text?: string;
	size?: "small" | "medium" | "large";
	onClick?: () => void;
	href?: string;
}

const DownloadButton = (props: ButtonProps) => {
	const { size = "medium", href, onClick } = props;
	const { t } = useTranslation('button');
	return (
		<a aria-label={t("button_name.download")}  onClick={onClick} href={href} style={{
			padding: size === "large" ? "12px 25px" :
				size === "medium" ?
					"10px 20px" : "8px 15px",
			fontSize: size === "large" ? "16px" :
				size === "medium" ?
					"14px" : "0.6rem",
			cursor: "pointer",
			whiteSpace: "nowrap"
		}}
			target="_blank"
			rel="noreferrer nofollow"
			className="download-button">{t("download")}</a>
	);
};

export default DownloadButton;