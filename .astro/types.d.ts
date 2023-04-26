declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"blog": {
"3-extensiones-para-ahorrar-datos-navegando-en-internet.md": {
  id: "3-extensiones-para-ahorrar-datos-navegando-en-internet.md",
  slug: "3-extensiones-para-ahorrar-datos-navegando-en-internet",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"3-herramientas-para-crear-el-readme-de-tu-perfil.md": {
  id: "3-herramientas-para-crear-el-readme-de-tu-perfil.md",
  slug: "3-herramientas-para-crear-el-readme-de-tu-perfil",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"5-herramientas-diferentes-que-utilizan-IA.md": {
  id: "5-herramientas-diferentes-que-utilizan-IA.md",
  slug: "5-herramientas-diferentes-que-utilizan-ia",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"5-pruebas-que-debes-hacer.md": {
  id: "5-pruebas-que-debes-hacer.md",
  slug: "5-pruebas-que-debes-hacer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"9-cursos-de-platzi-para.md": {
  id: "9-cursos-de-platzi-para.md",
  slug: "9-cursos-de-platzi-para",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"CuCoders.md": {
  id: "CuCoders.md",
  slug: "cucoders",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"ahorra-datos-convierte-y-descarga.md": {
  id: "ahorra-datos-convierte-y-descarga.md",
  slug: "ahorra-datos-convierte-y-descarga",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"astro-tu-proximo-framework-favorito.md": {
  id: "astro-tu-proximo-framework-favorito.md",
  slug: "astro-tu-proximo-framework-favorito",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"ciberdelitos-en-internet-cuidado-donde-pones-tus-llaves.md": {
  id: "ciberdelitos-en-internet-cuidado-donde-pones-tus-llaves.md",
  slug: "ciberdelitos-en-internet-cuidado-donde-pones-tus-llaves",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"como-crear-tu-logotipo-con.md": {
  id: "como-crear-tu-logotipo-con.md",
  slug: "como-crear-tu-logotipo-con",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"como-generar-imagenes-con-ia.md": {
  id: "como-generar-imagenes-con-ia.md",
  slug: "como-generar-imagenes-con-ia",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"como-hakearon-las-llaves-privadas.md": {
  id: "como-hakearon-las-llaves-privadas.md",
  slug: "como-hakearon-las-llaves-privadas",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"company-of-one.md": {
  id: "company-of-one.md",
  slug: "company-of-one",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"crea-tu-blog-en-la.md": {
  id: "crea-tu-blog-en-la.md",
  slug: "crea-tu-blog-en-la",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"crea-tu-web-personal-en-minutos-y-gratis-con-biolink.md": {
  id: "crea-tu-web-personal-en-minutos-y-gratis-con-biolink.md",
  slug: "crea-tu-web-personal-en-minutos-y-gratis-con-biolink",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"el-mejor-sitio-para-descubrir.md": {
  id: "el-mejor-sitio-para-descubrir.md",
  slug: "el-mejor-sitio-para-descubrir",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"errores-de-terceros-en-aplicaciones-multiplataformas.md": {
  id: "errores-de-terceros-en-aplicaciones-multiplataformas.md",
  slug: "errores-de-terceros-en-aplicaciones-multiplataformas",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"genera-el-nombre-de-tu-marca-o-producto-utilizando-inteligencia-artificial.md": {
  id: "genera-el-nombre-de-tu-marca-o-producto-utilizando-inteligencia-artificial.md",
  slug: "genera-el-nombre-de-tu-marca-o-producto-utilizando-inteligencia-artificial",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"pay-link.md": {
  id: "pay-link.md",
  slug: "pay-link",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"planifica-tu-semana-con-weektodo.md": {
  id: "planifica-tu-semana-con-weektodo.md",
  slug: "planifica-tu-semana-con-weektodo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"vale-la-pena-crear-una.md": {
  id: "vale-la-pena-crear-una.md",
  slug: "vale-la-pena-crear-una",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"weektodo-2-release.md": {
  id: "weektodo-2-release.md",
  slug: "weektodo-2-release",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
},
"store": {
"item1.md": {
  id: "item1.md",
  slug: "item1",
  body: string,
  collection: "store",
  data: InferEntrySchema<"store">
} & { render(): Render[".md"] },
"item2.md": {
  id: "item2.md",
  slug: "item2",
  body: string,
  collection: "store",
  data: InferEntrySchema<"store">
} & { render(): Render[".md"] },
"item3.md": {
  id: "item3.md",
  slug: "item3",
  body: string,
  collection: "store",
  data: InferEntrySchema<"store">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
