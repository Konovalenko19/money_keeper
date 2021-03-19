import React, { FC, ReactNode } from 'react';

import { ContainerStyled } from './styled';

interface IProps {
    children: ReactNode;
}

export const Container: FC<IProps> = props => {
    const { children } = props;

    if (!children) {
        return null;
    }

    return <ContainerStyled>{children}</ContainerStyled>;
};
