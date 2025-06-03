type TypographyProps = {
  label: string;
  color: string;
  variant: 'regular2' | 'regular3' | 'medium2' | 'medium3'
}

export default function Typography(props: TypographyProps) {
  let className;

  switch (props.variant) {
    case "medium3":
      className = "font-inter font-medium text-sm leading-[20px]"
      break;
    case "medium2":
      className = `font-inter font-medium text-xs leading-[16px]`;
      break;
    case 'regular2':
      className = "font-inter font-normal text-sm leading-[20px]";
      break;
    case 'regular3':
      className = "font-inter font-normal text-sm leading-[20px]"
  }
  return (
    <p style={{color: props.color}} className={className}>{props.label}</p>
  )
}