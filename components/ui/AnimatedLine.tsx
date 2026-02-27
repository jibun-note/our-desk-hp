'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type AnimatedLineProps = {
	/** SVG のパス（例: /images/shared/line1.svg） */
	src: string;
	/** 追加の class */
	className?: string;
	/** 画像の alt（装飾の場合は空で OK） */
	alt?: string;
};

/**
 * 手書きライン用アニメーションコンポーネント。
 * 視界に一定割合入ったら左→右へ「すっと描く」アニメーションを一度だけ再生する。
 * globals.css の .handwrite-line / .handwrite-line.is-visible とセットで使用。
 */
export default function AnimatedLine({ src, className, alt = '' }: AnimatedLineProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add('is-visible');
					observer.disconnect(); // 一度だけ発火
				}
			},
			{ threshold: 0.3 } // 30% 見えたら発動
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={cn('handwrite-line', className)}>
			<img src={src} alt={alt} aria-hidden={!alt} />
		</div>
	);
}
