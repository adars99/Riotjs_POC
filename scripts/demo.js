$(document).ready(function(){
	var items = [{'title':'subha'},{'title':'snig'}];
	em.init(function(){
		var elbtn = em.getElement('btn2');
		elbtn.setOpts({onclick:function(){
			items.length = 0;
			em.getElement('list1').setOpts({list:items},true);
		}},true);
		var el = em.getElement('btn1');
		el.setOpts({text:'Add',onclick: function(){
			var elt = em.getElement('text1');
			items.push({'title':elt.opts.text});
			em.getElement('list1').setOpts({list:items},true);
			elt.setOpts({text:'\n'},true);
		},setit:'set'},true);	
		
	});
	em.required('EM.List',function(){
		var elGrd = em.getElement('list1');
		elGrd.setOpts({list:items},true);
	});
   em.required('EM.KGrid',kgridInit);
   function kgridInit(){
		var elGrd = em.getElement('kgrid1');
		elGrd.setOpts({
        dataSource: {
            data: [{Name:'Stave',City:'Cal'},{Name:'Stave1',City:'Cal1'},{Name:'Stave2',City:'Cal2'}],
            schema: {
                model: {
                    fields: {
                        Name: { type: "string" },
                        City: { type: "string" }
                    }
                }
            },
            pageSize: 10
        },
        height: 500,
        scrollable: true,
        sortable: true,
        selectable: true,
        change:function(){},            
        filterable: true,
        pageable: true,
        columns: [
            {
                field: "Name",
                title: "Name of the dev"
            },
            {
                field: "City",
                title: "From city"
            }
        ]
    },true);
   }
	
}); 