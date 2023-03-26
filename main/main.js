
var array=[100, 4, 6, 7, 15, 9, 15, 4, 100]
function duplicate(array)
{
var newarray=[];
var newarray1=[];

	for(i=0;i<array.length;i++)
	{
		let exists=false;
	for(j=0;j<newarray.length;j++)
	{
		if(array[i]===newarray[j])
		{
			newarray1.push(array[i]);
			 exists=true;
			 break;
		}
	}
		if(!exists)
		{
			newarray.push(array[i]);
		}
	
}
return newarray1;
}
console.log(duplicate(array));


let values=[1,2,3,2];
function positiveNum(values)
{
	let result=[];
	for(i=0;i<values.length;i++)
	{
		if(values[i]<0)
		{
			result.push(Math.abs(values[i]));
		}
	}
	return result;
}

console.log(positiveNum(values));