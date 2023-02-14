import { StackedChart } from './StackedChart';
import { ToggleButtonOverview } from './togglebutton';

export function Overview() {
  return (
    <div className='overview-container'>
      <div className='overview-spec'>
        <div>
          <h4 className='overview-heading'>Overview of Sales Win/Lost</h4>
          <p className='overview-text'>Comapred to last month sales.</p>
        </div>
        <ToggleButtonOverview />
      </div>
      <StackedChart />
    </div>
  );
}
