import { Anchor, Flex, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

type params = {
	params: Promise<{ articleId: string }>
	searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>
}

const NewsArticle = async ({ params, searchParams }: params) => {
	const { articleId } = await params
	const { lang = 'en' } = await searchParams
	return (
		<div>
			<Title order={1}>News Article {articleId}</Title>
			<p>Reading in {lang}</p>
			<Flex
				mih={50}
				gap='md'
				justify='flex-start'
				align='center'
				direction='row'
				wrap='wrap'>
				<Anchor component={Link} href={`/articles/${articleId}?lang=en`}>
					English
				</Anchor>
				<Anchor component={Link} href={`/articles/${articleId}?lang=es`}>
					Spanish
				</Anchor>
				<Anchor component={Link} href={`/articles/${articleId}?lang=fr`}>
					French
				</Anchor>
				<Anchor
					component={Link}
					href={`/articles/${articleId}/use-client?lang=fr`}>
					Use Client
				</Anchor>
				this is articleId
			</Flex>
		</div>
	)
}

export default NewsArticle
