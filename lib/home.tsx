import React from 'react';

const tools: Tool[] = [
  {
    name: 'Prusa MK3s 3d printer',
    image: 'images/3d_printer.jpg',
    desc: 'I can show you how to use it, or help you print files',
  },
  {
    name: 'Alen keys',
    image: 'images/alen_keys.jpg',
    desc: 'Metric and Imperial alen keys',
  },
  {
    name: 'Axe',
    image: 'images/axe.jpg',
  },
  {
    name: 'Bike chain breaker',
    image: 'images/bike_chain_breaker.jpg',
    desc: 'Used to replace a bike chain',
  },
  {
    name: 'Bike chain wear measure',
    image: 'images/bike_chain_wear_measure.jpg',
    desc: 'Used to check if a bike chain must be replaced',
  },
  {
    name: 'Bike tire irons',
    image: 'images/bike_tire_irons.jpg',
    desc: 'Used to remove bike tire',
  },
  {
    name: 'Bike pump',
    desc: 'Forgot to take a picture',
  },
  {
    name: 'Calipers',
    image: 'images/calipers.jpg',
    desc: 'Used to make small accurate measurements',
  },
  {
    name: 'Caulk gun',
    image: 'images/caulk_gun.jpg',
  },
  {
    name: 'Chalk line',
    image: 'images/chalk_line.jpg',
    desc: 'Used to mark long straight lines',
  },
  {
    name: 'Circular saw',
    image: 'images/circular_saw.jpg',
    desc: '7 ¼ in blades, corded',
  },
  {
    name: 'Clamps',
    image: 'images/clamps.jpg',
    desc: '2 x 40 in, 2 x 27 in, 2 x 5 in',
  },
  {
    name: 'Drill bits',
    image: 'images/drill_bits.jpg',
  },
  {
    name: 'Cordless drills',
    image: 'images/drills.jpg',
    desc: 'impact driver and coordless drill',
  },
  {
    name: 'Impact driver bits',
    image: 'images/drivers.jpg',
    desc: 'Screw bits for impact driver',
  },
  {
    name: 'Screwdrivers, pliers, wirecutters',
    image: 'images/drivers_pliers.jpg',
    desc: 'Too many pliers, metal cutters, pliers to picture',
  },
  {
    name: 'Extension cord',
    image: 'images/extension_cord.jpg',
    desc: 'Heavy duty extension cord. You should use a thick cord with power tools',
  },
  {
    name: 'Files',
    image: 'images/files.jpg',
    desc: 'Includes flat, round, half round, triangular and other files.',
  },
  {
    name: 'Heat gun',
    image: 'images/heat_gun.jpg',
    desc: 'Basically a powerful hair dryer, corded',
  },
  {
    name: 'Hole saws',
    image: 'images/hole_saw.jpg',
    desc: '⅞, 1⅛ 1⅜, 1¾, 2½, 4¼ in',
  },
  {
    name: 'Knife and tool sharpeners',
    image: 'images/knife_sharpeners.jpg',
    desc: 'Stones, and bench sharpeners',
  },
  {
    name: 'Tape Measure and Laser Measure',
    image: 'images/laser_tape_measure.jpg',
    desc: 'Tape measure is usually more accurate but the laser is fast and covers more distance',
  },
  {
    name: 'Levels',
    image: 'images/levels.jpg',
    desc: '48 inch level, torpedo level, and laser level',
  },
  {
    name: 'Metal saws',
    image: 'images/metal_saws.jpg',
  },
  {
    name: 'Ninety degree clamp',
    image: 'images/ninty_degree_clamp.jpg',
  },
  {
    name: 'Orbital sander',
    image: 'images/orbit_sander.jpg',
    desc: 'Uses 5 in hook and loop - velco - sanding pads. Corded',
  },
  {
    name: 'Oscillating multi tool',
    image: 'images/oscillating_tool.jpg',
    desc: 'Good for cut out and cut offs. I only have saw tips, no sanding tips. Cordless',
  },
  {
    name: 'Pipe cutter',
    image: 'images/pipe_cutter.jpg',
    desc: 'Small pipe cutter, maybe inch and a half',
  },
  {
    name: 'Router with plunge base',
    image: 'images/router.jpg',
    desc: 'Has plywood sized bits and a 45 degree bevel bit. Corded',
  },
  {
    name: 'Logic analyzer',
    image: 'images/saleae_logic_analyzer.jpg',
    desc: 'Saleae Logic Pro 8, 8 channel lgoic analyzer',
  },
  {
    name: 'Saw horses',
    image: 'images/saw_horses.jpg',
  },
  {
    name: 'Security bits',
    image: 'images/security_bits.jpg',
  },
  {
    name: 'Shop vac',
    image: 'images/shop_vac.jpg',
  },
  {
    name: 'Small screw drivers',
    image: 'images/small_drivers.jpg',
    desc: 'I don\'t think I have a apple pentalobe driver',
  },
  {
    name: 'Sockets',
    image: 'images/sockets.jpg',
  },
  {
    name: 'Soldering iron',
    image: 'images/soldering_iron.jpg',
  },
  {
    name: 'Squares',
    image: 'images/squares.jpg',
    desc: 'Speed square, combo square, square',
  },
  {
    name: 'Staple gun',
    image: 'images/staple_gun.jpg',
  },
  {
    name: 'Studio light',
    image: 'images/studio_light.jpg',
    desc: 'Very bright, cool light, bought for light therapy but good for photography',
  },
  {
    name: 'Wire fish tape',
    image: 'images/wire_fish.jpg',
    desc: 'Used to pull wires thru walls',
  },
  {
    name: 'Wood carving tools',
    image: 'images/wood_carvers.jpg',
  },
  {
    name: 'Wood saws',
    image: 'images/wood_saws.jpg',
  },
  {
    name: 'Wrenches',
    image: 'images/wrenches.jpg',
    desc: 'Metric and Imperial wrenches',
  },

]

export default function home() {
  return skeleton("Tools", <React.Fragment>
      <div className="title">
        <h1 className="title">Tools</h1>
        <p>
          Contact me to borrow any of these tools or if there are tools
          you want that are not listed.
        </p>
      </div>
      <div className="nav">
        <Index tools={tools}/>
      </div>
      <div className="main">
        {tools.map(tool => <Tool key={tool.name} tool={tool}/>)}
      </div>
    </React.Fragment>
  );
}

function Index({tools}: {tools: Tool[]}) {
  return <ul>{ tools.map(tool => <li key={tool.name}><a href={`#${tool.name}`}>{tool.name}</a></li>) }</ul>
}

function Tool({tool}: {tool: Tool}) {
  return <div key={tool.name} id={tool.name}>
    <h3>{tool.name}</h3>
    {
      tool.image != null
      ? <a title="View full sized image" href={tool.image}><img src={tool.image} loading="lazy"/></a>
      : null
    }
    {tool.desc
      ? <div>{tool.desc}</div>
      : null
    }
  </div>
}

function skeleton(title: string, children: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="css/main.css" />
        <link rel="icon" href="images/favicon.svg" />
        <title>{title}</title>
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}

type Tool = {
  name: string,
  image?: string,
  desc?: string,
}
