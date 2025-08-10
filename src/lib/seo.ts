export const seoTs = `export function orgJSONLD(){
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WON96',
    url: 'https://blog.won96.com',
    logo: 'https://blog.won96.com/logo.png',
    sameAs: [
      'https://www.won96.com'
    ]
  };
}

export function articleJSONLD({title, url, datePublished, dateModified}:{title:string;url:string;datePublished:string;dateModified?:string;}){
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: { '@type': 'Organization', name: 'WON96' },
    publisher: {
      '@type': 'Organization',
      name: 'WON96',
      logo: { '@type': 'ImageObject', url: 'https://blog.won96.com/logo.png' }
    },
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified || datePublished
  };
}`;
