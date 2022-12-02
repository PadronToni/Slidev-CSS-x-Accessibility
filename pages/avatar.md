---
layout: two-cols
---
<section aria-labelledby="speaker-name"
	class="grid place-content-center h-full">
	<h1 id="speaker-name" class="font-bold">
		Simone Boccuzzi
	</h1>
	<!-- <div role="presentation" class="border-b-2 border-gray-500 mb-3"></div> -->
	<ul>
		<li>
			Frontend Developer @ Ominext
		</li>
		<li>
			Gestisco le architetture/librerie CSS e gli UI kit
		</li>
		<li>
			Da circa un anno studio ed applico i concetti di accessibilità nel mio
			workflow
		</li>
		<li>
			Promoter di cultura FOSS, organizzo eventi a riguardo, ultimamente speaker
		</li>
	</ul>
</section>

<template #right>
	<div class="grid place-content-center gap-4 h-full">
		<img src="/public/avatar-img.jpg"
			class="block w-48 h-48 rounded-full object-cover border-4 border-primary-500" />
		<div class="flex items-center justify-center gap-4">
			<a href="https://github.com/PadronToni" target="_blank"
				aria-label="profilo github">
				<ri-github-fill />
			</a>
			<a href="https://it.linkedin.com/in/simone-boccuzzi-ab7099194"
				target="_blank" aria-label="profilo linkedin">
				<ri-linkedin-box-fill />
			</a>
		</div>
	</div>
</template>


<style>
	h1 {
		font-size: 2.5rem !important;
		color: theme('colors.primary');
	}
</style>