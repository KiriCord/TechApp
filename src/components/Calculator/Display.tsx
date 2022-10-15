import React, { FunctionComponent } from 'react';

interface DisplayProps {
  hasMemory: boolean
  expression: string
  value: string
}

export const Screen: FunctionComponent<DisplayProps> = ({ value, hasMemory, expression }) => {
  return (
    <div className='display'>
      <div className='indicatorList'>
        {hasMemory &&
          <span>M</span>
        }

        <div className='expression'>
          {expression}
        </div>
      </div>

      <div className='screen'>
        {value}
      </div>
    </div>
  )
}

export default Screen;