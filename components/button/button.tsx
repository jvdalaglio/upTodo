import { Button } from "@mui/material";

type Props = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  children?: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClick?: () => void;
};

export function CustomButton({ primary, secondary, tertiary, children, type = "button", onClick, width }: Props) {
  return (
    <Button type={type} onClick={onClick} sx={{
      color: primary ? '#FFFFFF' : secondary ? '#D9D9D9' : tertiary ? '#FFFFFF' : undefined,
      bgcolor: primary ? '#8875FF' : undefined,
      height: '48px', width: width ? width : '100%',
      borderColor: primary ? '#8875FF' : secondary ? '#D9D9D9' : tertiary ? '#8875FF' : undefined,
      borderRadius: '3px',
      border: primary ? 'none' : secondary ? 'none' : tertiary ? 'solid 2px #8875FF' : undefined,
    }}>
      {children}
    </Button>
  );
}
