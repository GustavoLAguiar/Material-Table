import React, { forwardRef } from 'react';

import * as Icons from '@material-ui/icons';

const TableIcons = {
  Add: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Icons.ViewColumn {...props} ref={ref} />)
};

export default TableIcons;