## Parsing, Recursive Functions, and Immediate Invokation

In this tutorial, I will be covering how to do simple JSON parsing, using two different recursive functions.  As a side note, I will also explain using javascripts ability to immediately invoke a function.  So let's get started.

The first thing we need is a JSON object that has several layers of objects imbedded within it.  Here is the structure that I will use in this tutorial.

```
var myObj = {
    name: 'level 1',
    layer: {
        name: 'level 2',
        layer: {
            name: 'level 3',
            layer: {
                name: 'level 4',
                layer: {
                    name: 'level 5'
                }
            }
        }
    }
};

```

The main outer object consists of two properties, a name and a layer property that will hold other nested objects.  Each of these nested objects contain the same properties as its parent.  This holds true until the inner-most layer object, which only contains a name property.

Now that we have an object to work on, let's discuss how to parse this object.