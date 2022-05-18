import React, { forwardRef } from 'react';

import * as Icons from '@material-ui/icons';

export default function TableIcons() {
  const icons = {
    Add: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.AddBox {...props} ref={ref} />) },
    Check: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.Check {...props} ref={ref} />) },
    Clear: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.Clear {...props} ref={ref} />) },
    Delete: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.DeleteOutline {...props} ref={ref} />) },
    DetailPanel: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.ChevronRight {...props} ref={ref} />) },
    Edit: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.Edit {...props} ref={ref} />) },
    Export: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.SaveAlt {...props} ref={ref} />) },
    Filter: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.FilterList {...props} ref={ref} />) },
    FirstPage: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.FirstPage {...props} ref={ref} />) },
    LastPage: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.LastPage {...props} ref={ref} />) },
    NextPage: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.ChevronRight {...props} ref={ref} />) },
    PreviousPage: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.ChevronLeft {...props} ref={ref} />) },
    ResetSearch: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.Clear {...props} ref={ref} />) },
    Search: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.Search {...props} ref={ref} />) },
    SortArrow: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.ArrowDownward {...props} ref={ref} />) },
    ThirdStateCheck: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.Remove {...props} ref={ref} />) },
    ViewColumn: function forwardRef(props: any, ref: React.Ref<SVGSVGElement>) { return (<Icons.ViewColumn {...props} ref={ref} />) },
  };

  return { icons };
};

TableIcons.displayName = 'TableIcons';