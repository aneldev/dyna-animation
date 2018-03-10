import * as React from 'react';

export interface IDynaAnimationListProps{
  className?:string;
  children:JSX.Element[];
}

export class DynaAnimationList extends React.Component<IDynaAnimationListProps>{

  public render():JSX.Element{
    const {
      className: userClassName,
    } = this.props;

    const className:string=[
      "dyna-animation-list",
      userClassName
    ].join(' ').trim();

    return (
      <div className={className}>

      </div>
    );

  }
}
