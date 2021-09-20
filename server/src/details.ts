export let details = new Map([
    // stream instructions

    [0x40, {
		detail: 'Push n Bytes',
		doc: ''
	}],
    [0x41, {
		detail: 'Push n Words',
		doc: ''
	}],
    [0xb0, {
		detail: 'Push Bytes',
		doc: ''
	}],
    [0xb8, {
		detail: 'Push Words',
		doc: ''
	}],

    // "normal" instructions

    [0x7f, {
		detail: 'Adjust Angle',
		doc: 'Pops: 1.'
	}],
	[0x64, {
		detail: 'Absolute',
		doc: 'Pops: 1, pushes: 1.\nPops n off the stack and pushes onto the stack the absolute value of n.'
	}],
	[0x60, {
		detail: 'Add',
		doc: 'Pops: 2, pushes: 1.\nPops n1 and n2 off the stack and pushes the sum of the two elements onto the stack.'
	}],
	[0x27, {
		detail: 'Align Points',
		doc: 'Pops: 2.'
	}],
	[0x3c, {
		detail: 'Align Relative Point',
		doc: 'Pops: -1.'
	}],
	[0x5a, {
		detail: 'Logical And',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x2b, {
		detail: 'Call Function',
		doc: 'Pops: 1.'
	}],
	[0x67, {
		detail: 'Ceiling',
		doc: 'Pops: 1, pushes: 1.\nPops n1 and returns n, the least integer value greater than or equal to n1. For instance, the ceiling of 15 is 15, but the ceiling of 15.3 is 16. The ceiling of -0.8 is 0. (n is the least integer value greater than or equal to n1).'
	}],
	[0x25, {
		detail: 'Copy X To Top Stack',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x22, {
		detail: 'Clear Stack',
		doc: 'Pops: -1.'
	}],
	[0x4f, {
		detail: 'Debug Call',
		doc: 'Pops: 1.'
	}],
	[0x73, {
		detail: 'Delta Exception C1',
		doc: 'Pops: -1.'
	}],
	[0x74, {
		detail: 'Delta Exception C2',
		doc: 'Pops: -1.'
	}],
	[0x75, {
		detail: 'Delta Exception C3',
		doc: 'Pops: -1.'
	}],
	[0x5d, {
		detail: 'Delta Exception P1',
		doc: 'Pops: -1.'
	}],
	[0x71, {
		detail: 'Delta Exception P2',
		doc: 'Pops: -1.'
	}],
	[0x72, {
		detail: 'Delta Exception P3',
		doc: 'Pops: -1.'
	}],
	[0x24, {
		detail: 'Get Depth Of Stack',
		doc: 'Pops: 0, pushes: 1.'
	}],
	[0x62, {
		detail: 'Divide',
		doc: 'Pops: 2, pushes: 1.\nPops n1 and n2 off the stack and pushes onto the stack the quotient obtained by dividing n2 by n1. Note that this truncates rather than rounds the value. The TrueType Rasterizer v.1.7 and later will catch any division-by-zero errors.'
	}],
	[0x20, {
		detail: 'Duplicate Top Stack',
		doc: 'Pops: 1, pushes: 2.'
	}],
	[0x59, {
		detail: 'End If',
		doc: ''
	}],
	[0x1b, {
		detail: 'Else',
		doc: ''
	}],
	[0x2d, {
		detail: 'End Function Definition',
		doc: ''
	}],
	[0x54, {
		detail: 'Equal',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x57, {
		detail: 'Even',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x2c, {
		detail: 'Function Definition',
		doc: 'Pops: 1.'
	}],
	[0x4e, {
		detail: 'Set Auto Flip Off',
		doc: ''
	}],
	[0x4d, {
		detail: 'Set Auto Flip On',
		doc: ''
	}],
	[0x80, {
		detail: 'Flip Point',
		doc: 'Pops: -1.'
	}],
	[0x82, {
		detail: 'Flip Range Off',
		doc: 'Pops: 2.'
	}],
	[0x81, {
		detail: 'Flip Range On',
		doc: 'Pops: 2.'
	}],
	[0x66, {
		detail: 'Floor',
		doc: 'Pops: 1, pushes: 1.\nPops n1 and returns n, the greatest integer value less than or equal to n1.'
	}],
	[0x46, {
		detail: 'Get Coordinate On Projection Vector [N|O]',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x88, {
		detail: 'Get Info',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x91, {
		detail: 'Get Variation',
		doc: 'Pops: 0, pushes: -1.'
	}],
	[0xd, {
		detail: 'Get Freedom Vector',
		doc: 'Pops: 0, pushes: 2.'
	}],
	[0xc, {
		detail: 'Get Projection Vector',
		doc: 'Pops: 0, pushes: 2.'
	}],
	[0x52, {
		detail: 'Greater Than',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x53, {
		detail: 'Greater Than Or Equal',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x89, {
		detail: 'Instruction Definition',
		doc: 'Pops: 1.'
	}],
	[0x58, {
		detail: 'If',
		doc: 'Pops: 1.'
	}],
	[0x8e, {
		detail: 'Set Instruction Execution Control',
		doc: 'Pops: 2.'
	}],
	[0x39, {
		detail: 'Interpolate Points',
		doc: 'Pops: -1.'
	}],
	[0xf, {
		detail: 'Move Point To Intersection',
		doc: 'Pops: 5.'
	}],
	[0x30, {
		detail: 'Interpolate Untouched Points [Y|X]',
		doc: ''
	}],
	[0x1c, {
		detail: 'Jump',
		doc: 'Pops: 1.'
	}],
	[0x79, {
		detail: 'Jump Relative On False',
		doc: 'Pops: 2.'
	}],
	[0x78, {
		detail: 'Jump Relative On True',
		doc: 'Pops: 2.'
	}],
	[0x2a, {
		detail: 'Loop And Call Function',
		doc: 'Pops: 2.'
	}],
	[0x50, {
		detail: 'Less Than',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x51, {
		detail: 'Less Than Or Equal',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x8b, {
		detail: 'Maximum',
		doc: 'Pops: 2, pushes: 1.\nPops two elements, e1 and e2, from the stack and pushes the larger of these two quantities onto the stack.'
	}],
	[0x49, {
		detail: 'Measure Distance [N|O]',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x2e, {
		detail: 'Move Direct Absolute Point [r|R]',
		doc: 'Pops: 1.'
	}],
	[0xc0, {
		detail: 'Move Direct Relative Point [m|M <|> r|R Gr|Bl|Wh]',
		doc: 'Pops: 1.'
	}],
	[0x3e, {
		detail: 'Move Indirect Absolute Point [r|R]',
		doc: 'Pops: 2.'
	}],
	[0x8c, {
		detail: 'Minimum',
		doc: 'Pops: 2, pushes: 1.\nPops two elements, e1 and e2, from the stack and pushes the smaller of these two quantities onto the stack.'
	}],
	[0x26, {
		detail: 'Move X To Top Stack',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0xe0, {
		detail: 'Move Indirect Relative Point [m|M <|> r|R Gr|Bl|Wh]',
		doc: 'Pops: 2.'
	}],
	[0x4b, {
		detail: 'Measure Pixel Per Em',
		doc: 'Pops: 0, pushes: 1.'
	}],
	[0x4c, {
		detail: 'Measure Point Size',
		doc: 'Pops: 0, pushes: 1.'
	}],
	[0x3a, {
		detail: 'Move Stack-indirect Relative Point [m|M]',
		doc: 'Pops: 2.'
	}],
	[0x63, {
		detail: 'Multiply',
		doc: 'Pops: 2, pushes: 1.\nPops n1 and n2 off the stack and pushes onto the stack the product of the two elements.'
	}],
	[0x65, {
		detail: 'Negate',
		doc: 'Pops: 1, pushes: 1.\nThis instruction pops n1 off the stack and pushes onto the stack the negated value of n1.'
	}],
	[0x55, {
		detail: 'Not Equal',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x5c, {
		detail: 'Logical Not',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x6c, {
		detail: 'No Round [Gr|Bl|Wh]',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x56, {
		detail: 'Odd',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x5b, {
		detail: 'Logical Or',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x21, {
		detail: 'Pop Top Stack',
		doc: 'Pops: 1.'
	}],
	[0x45, {
		detail: 'Read CVT',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x7d, {
		detail: 'Round Down To Grid',
		doc: ''
	}],
	[0x7a, {
		detail: 'Round Off',
		doc: ''
	}],
	[0x8a, {
		detail: 'Roll Top Three Stack',
		doc: 'Pops: 3, pushes: 3.'
	}],
	[0x68, {
		detail: 'Round [Gr|Bl|Wh]',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x43, {
		detail: 'Read Store',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x3d, {
		detail: 'Round To Double Grid',
		doc: ''
	}],
	[0x18, {
		detail: 'Round To Grid',
		doc: ''
	}],
	[0x19, {
		detail: 'Round To Half Grid',
		doc: ''
	}],
	[0x7c, {
		detail: 'Round Up To Grid',
		doc: ''
	}],
	[0x77, {
		detail: 'Super Round 45 Degrees',
		doc: 'Pops: 1.'
	}],
	[0x7e, {
		detail: 'Set Angle Weight',
		doc: 'Pops: 1.'
	}],
	[0x85, {
		detail: 'Scan Conversion Control',
		doc: 'Pops: 1.'
	}],
	[0x8d, {
		detail: 'Scan Type',
		doc: 'Pops: 1.'
	}],
	[0x48, {
		detail: 'Set Coord From Stack FP',
		doc: 'Pops: 2.'
	}],
	[0x1d, {
		detail: 'Set CVT Cut In',
		doc: 'Pops: 1.'
	}],
	[0x5e, {
		detail: 'Set Delta Base In Graphics State',
		doc: 'Pops: 1.'
	}],
	[0x86, {
		detail: 'Set Dual Projection Vector To Line [r|R]',
		doc: 'Pops: 2.'
	}],
	[0x5f, {
		detail: 'Set Delta Shift In Graphics State',
		doc: 'Pops: 1.'
	}],
	[0xb, {
		detail: 'Set Freedom Vector From Stack',
		doc: 'Pops: 2.'
	}],
	[0x4, {
		detail: 'Set Freedom Vector To Coordinate Axis [Y|X]',
		doc: 'Sets the freedom_vector to one of the coordinate axes depending on the value of the flag a.'
	}],
	[0x8, {
		detail: 'Set Freedom Vector To Line [r|R]',
		doc: 'Pops: 2.'
	}],
	[0xe, {
		detail: 'Set Freedom Vector To Projection Vector',
		doc: ''
	}],
	[0x34, {
		detail: 'Shift Contour By Last Point [2|1]',
		doc: 'Pops: 1.'
	}],
	[0x32, {
		detail: 'Shift Point By Last Point [2|1]',
		doc: 'Pops: -1.'
	}],
	[0x38, {
		detail: 'Shift Zone By Pixel',
		doc: 'Pops: -1.'
	}],
	[0x36, {
		detail: 'Shift Zone By Last Point [2|1]',
		doc: 'Pops: 1.'
	}],
	[0x17, {
		detail: 'Set Loop Variable',
		doc: 'Pops: 1.'
	}],
	[0x1a, {
		detail: 'Set Minimum Distance',
		doc: 'Pops: 1.'
	}],
	[0xa, {
		detail: 'Set Projection Vector From Stack',
		doc: 'Pops: 2.'
	}],
	[0x2, {
		detail: 'Set Projection Vector To Coordinate Axis [Y|X]',
		doc: 'Sets the projection_vector to one of the coordinate axes depending on the value of the flag a.'
	}],
	[0x6, {
		detail: 'Set Projection Vector To Line [r|R]',
		doc: 'Pops: 2.'
	}],
	[0x76, {
		detail: 'Super Round',
		doc: 'Pops: 1.'
	}],
	[0x10, {
		detail: 'Set Reference Point 0',
		doc: 'Pops: 1.'
	}],
	[0x11, {
		detail: 'Set Reference Point 1',
		doc: 'Pops: 1.'
	}],
	[0x12, {
		detail: 'Set Reference Point 2',
		doc: 'Pops: 1.'
	}],
	[0x1f, {
		detail: 'Set Single Width',
		doc: 'Pops: 1.'
	}],
	[0x1e, {
		detail: 'Set Single Width Cut-In',
		doc: 'Pops: 1.'
	}],
	[0x61, {
		detail: 'Subtract',
		doc: 'Pops: 2, pushes: 1.\nPops n1 and n2 off the stack and pushes the difference (n2-n1) between the two elements onto the stack.'
	}],
	[0x0, {
		detail: 'Set Freedom And Projection Vectors To Coordinate Axis [Y|X]',
		doc: 'Sets both projection_vector and freedom_vector to one of the coordinate axes depending on the value of the flag a.'
	}],
	[0x23, {
		detail: 'Swap Top Stack',
		doc: 'Pops: 2, pushes: 2.'
	}],
	[0x13, {
		detail: 'Set Zone Pointer 0',
		doc: 'Pops: 1.'
	}],
	[0x14, {
		detail: 'Set Zone Pointer 1',
		doc: 'Pops: 1.'
	}],
	[0x15, {
		detail: 'Set Zone Pointer 2',
		doc: 'Pops: 1.'
	}],
	[0x16, {
		detail: 'Set Zone Pointer S',
		doc: 'Pops: 1.'
	}],
	[0x29, {
		detail: 'Untouch Point',
		doc: 'Pops: 1.'
	}],
	[0x70, {
		detail: 'Write CVT In Font Units',
		doc: 'Pops: 2.'
	}],
	[0x44, {
		detail: 'Write CVT In Pixels',
		doc: 'Pops: 2.'
	}],
	[0x42, {
		detail: 'Write Store',
		doc: 'Pops: 2.'
	}]
]);
