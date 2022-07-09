import React from 'react'
import { Link } from 'remix'
import { Post } from '~/service/post';

export interface SnippetCardProps extends Post {
  readonly?: boolean;
}

const SnippetCard = React.memo<SnippetCardProps>((props) => {
  const { children, readonly, title, slug } = props;
  return (
    <div className="snippet-card p-8 rounded">
      <div className="flex">
        <div className="w-12 h-12 leading-10 text-center bg-yellow-400 rounded-full text-black text-xl font-medium logo">JS</div>
        <div className="mx-4">
          {React.createElement(
            !readonly ? Link : 'span',
            // @ts-ignore
            { ...(!readonly && { to: slug }) },
            <h3 className="text-2xl font-medium">{title}</h3>
          )}
          <div className="text-sm text-gray-400">JavaScript</div>
        </div>
      </div>
      {children}
    </div>
  )
})

SnippetCard.displayName = 'SnippetCard'

export default SnippetCard