import React from 'react';

interface Props {
  handleChangeView: (viewName: string) => void;
  currentViewName: string;
}

interface ViewType {
  name: string;
  value: string;
}

const viewTypes: ViewType[] = [
  { name: 'Wykres', value: 'chart' },
  { name: 'Wykres Kołowy', value: 'pie-chart' },
  { name: 'Tabela', value: 'table' }
];

export const SimpleHeaderSection = (props: Props) => {
  const currenClassName = 'border-green-500 text-green-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm';
  const defaultClassName = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm';

  const handleOnChangeSelect = (event: any) => {
    const selectedView = event.target.value;
    props.handleChangeView(selectedView);
  };

  const desktopViewTypeList = viewTypes.map(viewType => {
    return (
      <>
        <button
          key={ viewType.value }
          onClick={ event => props.handleChangeView(viewType.value) }
          className={ props.currentViewName === viewType.value ? currenClassName : defaultClassName }>
          { viewType.name }
        </button>
      </>
    );
  });

  const mobileViewTypeList = viewTypes.map(viewType => {
    return (
      <>
        <option key={ viewType.value } selected={ props.currentViewName === viewType.value } value={ viewType.value }>
          { viewType.name }
        </option>
      </>
    );
  });

  return (
    <>
      <div className="border-b border-gray-200 pb-5 mt-5 sm:pb-0">
        {/*<h3 className="text-lg font-medium leading-6 text-gray-900">Widoki</h3>*/ }
        <div className="mt-3 sm:mt-4">
          <div className="sm:hidden">
            <label className="sr-only">Select a tab</label>
            <select onChange={ handleOnChangeSelect } id="current-tab" name="current-tab"
                    defaultValue={ props.currentViewName }
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
              { mobileViewTypeList }
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {/*Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300*/ }
              { desktopViewTypeList }
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
