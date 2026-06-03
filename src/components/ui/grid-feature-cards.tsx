import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
	const p = genDeterministicPattern(feature.title);

	return (
		<div className={cn('relative overflow-hidden p-6 bg-gradient-to-b from-white to-pink-50/15 hover:to-pink-50/30 group/card transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/5', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-pink-500/5 to-pink-500/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-pink-500/10 stroke-pink-500/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 relative z-20 group-hover/card:bg-pink-500 group-hover/card:text-white transition-all duration-300 shadow-xs">
				<feature.icon className="size-5.5" strokeWidth={1.5} aria-hidden />
			</div>
			<h3 className="mt-6 text-sm md:text-base font-extrabold text-gray-900 relative z-20 group-hover/card:text-pink-650 transition-colors leading-tight">{feature.title}</h3>
			<p className="text-gray-700 relative z-20 mt-2 text-xs font-semibold leading-relaxed">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} className="fill-pink-500/25" />
					))}
				</svg>
			)}
		</svg>
	);
}

function genDeterministicPattern(title: string): number[][] {
	// Create a simple, stable hash seed from the title characters
	let hash = 0;
	for (let i = 0; i < title.length; i++) {
		hash = title.charCodeAt(i) + ((hash << 5) - hash);
	}
	
	const length = 5;
	const squares: number[][] = [];
	for (let i = 0; i < length; i++) {
		const xSeed = Math.abs((hash + i * 13) % 4) + 7; // random x between 7 and 10
		const ySeed = Math.abs((hash + i * 37) % 6) + 1; // random y between 1 and 6
		squares.push([xSeed, ySeed]);
	}
	return squares;
}
