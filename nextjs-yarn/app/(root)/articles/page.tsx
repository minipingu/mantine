import { Anchor, Flex, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

type params = {
	params: Promise<{ articleId: string }>
	searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>
}

const Articles = async ({ params, searchParams }: params) => {
	const { articleId } = await params
	const { lang = 'en' } = await searchParams
	return (
		<div>
			<Title order={1}>News Article {articleId}</Title>
			<p>Reading in language</p>
			<Flex
				mih={50}
				gap='md'
				justify='flex-start'
				align='center'
				direction='row'
				wrap='wrap'>
				<Anchor
					component={Link}
					href={`/articles/breaking-news-123?lang=en`}>
					English
				</Anchor>
				<Anchor
					component={Link}
					href={`/articles/breaking-news-123?lang=es`}>
					Spanish
				</Anchor>
				<Anchor
					component={Link}
					href={`/articles/breaking-news-123?lang=fr`}>
					French
				</Anchor>
				this is articles
			</Flex>
		</div>
	)
}

export default Articles
