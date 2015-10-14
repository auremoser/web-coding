## Intro to Network + Graph Data
###Parsons: Journalism + Design
###[Web Coding for Interactive Design](https://github.com/auremoser/web-coding)
**October 14th, 2015**

![Storylines](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/storylines.jpg)

**Interactive to inspire**: Tanahashi, Y., UC Davis, [_StoryLines_](http://vis.cs.ucdavis.edu/~tanahashi/storylines/)
You can read their [paper on the topic here](http://vis.cs.ucdavis.edu/~tanahashi/PUBLICATIONS/YZR_INFOVIS2012.pdf).


Find this document here:

* Gist: <http://tinyurl.com/wc-graphs>


### Outline

1. Graph Basics
	+ Definitions
	+ Anatomy of a Graph
2. Graph Data
	+ Examples + Formats
3. Graph Tools
	+ Libraries + Frameworks
4. Building A Narrative
	+ Case Study 1: [NYC Graphiti Graph](https://github.com/auremoser/graphitiNEt)
	+ Case Study 2: [OSM Tag Graph](http://auremoser.github.io/bkx-osm/#)
	+ Bl.ocks for Mapping display
6. Resources


#### Graph Basics

##### Definitions

**Network or Graph Data** is data the involves connections between entities where those relationships can be described/explained/made to have value. 

It should be noted that [this definition of graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) is distinct from "charts and graphs" which could involve any type of chart.

**Exammple: Facebook Graph**:
![FaceBook Graph](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/fbook.jpg)

Think about difference Facebook Graph Visualizations:

* [NEXUS Friend Grapher](http://nexus.ludios.net/)
* [Thomas Fletcher's Friend Wheel](http://thomas-fletcher.com/friendwheel/)

##### Anatomy of a Graph

![Complete Graphs](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/graph.jpg)

A graph is composed (visibly) of points and lines that connect them, these are sometimes called:

* **Nodes**: the points/things existing in the network.
* **Edges**: the lines or relationships that connect the nodes to eachother and create a larger network. 

In a graph of your family, for example, the [family tree](https://github.com/justincy/d3-pedigree-examples) would be a kind of graph visualization, illustrating both the people in the family (nodes) and the connections between them like "daughter of" "son of" (edges).

![family tree](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/family.jpg)

You might also read: 

* **Vectors**: like in math, vectors apply directionality to the edges, so parent->child nodes on a family tree have their relational edge describing that the "child" is the daughter and not the other way around.

* **Force-directed**: way of drawing graphs such that the nodes and edges spread out agreably

Try drawing your own graph here: <http://bl.ocks.org/mbostock/929623>

#### Graph Data

You can source graph data in a few places, but you might just want to make your own.

* Facebook Graph Data [Download](http://cyborganthropology.com/How_to_Download_Facebook_a_Social_Graph_with_NameGenWeb) | [Graph API](https://developers.facebook.com/docs/graph-api) | [Graph Explorers](http://mrcoles.com/blog/exploring-facebook-graph-api-data/)
* [Google Public Data Directory](https://www.google.com/publicdata/directory)
* Les Miserables [Character Connections]()
* Gexf [Sample Datasets](http://gexf.net/format/datasets.html)
* Middle Eastern [Country Relationships](http://bit.ly/KIB_MiddleEast)

##### Examples and Formats

There are all types of graph visualizations. You might check out Manuel Lima's blog [Visual Complexity](http://www.visualcomplexity.com/vc/) for examples of the kinds of narratives you can build with graphs.

![Visual Complexity](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/vc.jpg) 

**SEMANTIC NETWORKS**

![Linked Jazz](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/lj.jpg)

Linked Jazz Project, NYPL Labs

* Code: <https://github.com/thisismattmiller/linked-jazz-network>
* Demo: <https://linkedjazz.org/network/>

**BIOLOGY/SCIENCE**

![Gene Expression](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/gene.jpg)

Gene Ontology Data, Damian Kao

* Explanation: <http://blog.nextgenetics.net/?e=19>
* Demo: <http://blog.nextgenetics.net/demo/entry0019/demo.zip>
* Demo: <http://blog.nextgenetics.net/demo/entry0019/demo.html>

**MUSIC**

![iTunes representation](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/itunes.jpg)

iTunes Library Graph, Christopher Martin

* Code: <http://cgmartin.com/itunes-library-network-graph/>
* Demo: <https://github.com/cgmartin/iTunes-Library-Network-Graph>

**SOCIAL NETWORKS**

![Oscar Contenders](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/oscar.jpg)

Oscar Article, NYTimes, Mike Bostock

* Explanation: <http://emptypipes.org/2015/02/15/selectable-force-directed-graph/>
* Demo: <http://www.nytimes.com/interactive/2013/02/20/movies/among-the-oscar-contenders-a-host-of-connections.html>


**POLITICAL NETWORKS**

![Middle East](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/gexf.jpg)

* Explanation: <http://www.informationisbeautiful.net/2014/who-likes-whom-in-the-middle-east-key-players-relationships/>
* Data: <http://bit.ly/KIB_MiddleEast>
* Demo: <http://www.informationisbeautiful.net/visualizations/islamic-sects-schools-branches-movements/>

Things like the inspiration graph for this week, and this [Baby Name Graph](http://www.visualcinnamon.com/babynamesus), are pseudo-graphical, but not quite like the examples above because they show layers of data relative to time factors, but do not illustrate intersection points between the lines, or how babynames have "mutated/merged/interacted", which would bring you closer to a graph visualizations.

![babynames](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/baby.jpg)

#### Graph Tools

There are lots of ways to approach graph information, you can use Javascript and D3 to draw your graph, or you can use a library/framework that specializes in graph information

##### Libraries and Frameworks

* [Sigma.JS](http://sigmajs.org/)
* [Arbor.JS](http://arborjs.org/)
* [Gephi](http://gephi.github.io/)
* [D3](): data driven documents, loads of examples of graph/force-directed visualizations here
* [RelFinder](http://www.visualdataweb.org/relfinder.php)
* [GraphSub](https://timebandit.github.io/graphSub/): a JS plugin for D3 JS

Check out some of the examples in each of those libraries, and see if you can play with the data they provide to make something that is useful to you.

#### Building a Narrative

##### NYC Graphiti Visualization

* **Code**: <https://github.com/auremoser/graphitiNEt>
* **Demo**: <https://github.com/auremoser/graphitiNEt>

![data](https://camo.githubusercontent.com/31695e1ee86323b2ad8dc2c713e77b1a92a9f86f/68747470733a2f2f7261772e6769746875622e636f6d2f617572656d6f7365722f696d616765732f6d61737465722f6e6f6465732b65646765732e706e67)

This visualization uses data from Freebase about Graffiti artists and the art movements they list has influencing their work. It uses Gexf, which is a javascript wrapper for Gephi, and uses color to indicate the artists' country of origin.

Source + Target columns in an excel file fed the construction of the graph in Gephi, the desktop application, and then the wrapper allowed me to display it on the web. 

![GraphitiNet](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/gexf.jpg)

##### BKX OSM

* **Code**: <https://github.com/auremoser/bkx-osm>
* **Demo**: <http://auremoser.github.io/bkx-osm/#>

This visualization used D3 to draw a graph representing the myriad OSM tags related to "bicycle" in the Open Street Map Tag Library. We wanted to work on collecting data for Public Space and Pedestrian data too but the tags were way too messy. 

![Folksonomy](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/osm.jpg)

##### Graphing in Bl.ocks

There are loads of bl.ocks made for Graph information should you want to use D3, unfortunately, warning: the data format can be a bit tough, but if you have data to support this kind of structure, let me know and we can talk about working with it for your final projects.

![WeightedForce](https://raw.githubusercontent.com/auremoser/web-coding/master/_imgs/graph/d3.jpg)

* [Draw your own Graph](http://bl.ocks.org/mbostock/929623)
* [Directional Force Layout](http://bl.ocks.org/d3noob/5141278)
* [Force-directed Graph Demo](http://bl.ocks.org/mbostock/4062045)
* [Expand/collapse force layout](http://bl.ocks.org/mbostock/1093130)
* [Weighted Collapsable Force Layout](http://bl.ocks.org/mbostock/1062288)
* [Tarot Card Reader?](http://tarot-pedia.meteor.com/)

#### Resources

* [D3.forcebundle](https://github.com/upphiminn/d3.ForceBundle)
* Short Tutorial on [_Getting Started with D3 Graphs_](http://thinkingonthinking.com/Getting-Started-With-D3/).
* Krempel, L., [_Network Visualization_](http://sisob.lcc.uma.es/repositorio/private_documents/papers/Collide/Krempel_NetworkVisualization.pdf).
* Tamassia, R., [_Handbook of graph drawing and visualization_](https://cs.brown.edu/~rt/gdhandbook/).
* Tarawneh, R.M., et al., [_A general introduction to graph visualization techniques_](http://drops.dagstuhl.de/opus/volltexte/2012/3748/pdf/13.pdf).





