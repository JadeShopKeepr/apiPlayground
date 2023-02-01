type Tag = 'div'  |  'span'|  'h1' | 'h2' | 'p' ;
type Variant = 'title 1' | 'body-1' |'body-2'| 'label'

interface TypographyProps {
   children: string,
   tag: Tag,
   variant: Variant;
 
}

export const Typography: React.FC<TypographyProps> = ({ children, tag = 'div',  variant}) => {
 const Component = tag
console.log("@", Component);

 return <Component className={variant}>{children}</Component>
};
