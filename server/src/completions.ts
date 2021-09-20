'use strict';
import {
	CompletionItem,
	CompletionItemKind,
} from 'vscode-languageserver/node';


export let completionItems = [
    // stream instructions

    {
		label: 'NPUSHB[]',
		kind: CompletionItemKind.Text,
		data: 0x40
	},
    {
		label: 'NPUSHW[]',
		kind: CompletionItemKind.Text,
		data: 0x41
	},
    {
		label: 'PUSHB[]',
		kind: CompletionItemKind.Text,
		data: 0xb0
	},
    {
		label: 'PUSHW[]',
		kind: CompletionItemKind.Text,
		data: 0xb8
	},

    // "normal" instructions

	{
		label: 'AA[]',
		kind: CompletionItemKind.Text,
		data: 0x7f
	},
	{
		label: 'ABS[]',
		kind: CompletionItemKind.Text,
		data: 0x64
	},
	{
		label: 'ADD[]',
		kind: CompletionItemKind.Text,
		data: 0x60
	},
	{
		label: 'ALIGNPTS[]',
		kind: CompletionItemKind.Text,
		data: 0x27
	},
	{
		label: 'ALIGNRP[]',
		kind: CompletionItemKind.Text,
		data: 0x3c
	},
	{
		label: 'AND[]',
		kind: CompletionItemKind.Text,
		data: 0x5a
	},
	{
		label: 'CALL[]',
		kind: CompletionItemKind.Text,
		data: 0x2b
	},
	{
		label: 'CEILING[]',
		kind: CompletionItemKind.Text,
		data: 0x67
	},
	{
		label: 'CINDEX[]',
		kind: CompletionItemKind.Text,
		data: 0x25
	},
	{
		label: 'CLEAR[]',
		kind: CompletionItemKind.Text,
		data: 0x22
	},
	{
		label: 'DEBUG[]',
		kind: CompletionItemKind.Text,
		data: 0x4f
	},
	{
		label: 'DELTAC1[]',
		kind: CompletionItemKind.Text,
		data: 0x73
	},
	{
		label: 'DELTAC2[]',
		kind: CompletionItemKind.Text,
		data: 0x74
	},
	{
		label: 'DELTAC3[]',
		kind: CompletionItemKind.Text,
		data: 0x75
	},
	{
		label: 'DELTAP1[]',
		kind: CompletionItemKind.Text,
		data: 0x5d
	},
	{
		label: 'DELTAP2[]',
		kind: CompletionItemKind.Text,
		data: 0x71
	},
	{
		label: 'DELTAP3[]',
		kind: CompletionItemKind.Text,
		data: 0x72
	},
	{
		label: 'DEPTH[]',
		kind: CompletionItemKind.Text,
		data: 0x24
	},
	{
		label: 'DIV[]',
		kind: CompletionItemKind.Text,
		data: 0x62
	},
	{
		label: 'DUP[]',
		kind: CompletionItemKind.Text,
		data: 0x20
	},
	{
		label: 'EIF[]',
		kind: CompletionItemKind.Text,
		data: 0x59
	},
	{
		label: 'ELSE[]',
		kind: CompletionItemKind.Text,
		data: 0x1b
	},
	{
		label: 'ENDF[]',
		kind: CompletionItemKind.Text,
		data: 0x2d
	},
	{
		label: 'EQ[]',
		kind: CompletionItemKind.Text,
		data: 0x54
	},
	{
		label: 'EVEN[]',
		kind: CompletionItemKind.Text,
		data: 0x57
	},
	{
		label: 'FDEF[]',
		kind: CompletionItemKind.Text,
		data: 0x2c
	},
	{
		label: 'FLIPOFF[]',
		kind: CompletionItemKind.Text,
		data: 0x4e
	},
	{
		label: 'FLIPON[]',
		kind: CompletionItemKind.Text,
		data: 0x4d
	},
	{
		label: 'FLIPPT[]',
		kind: CompletionItemKind.Text,
		data: 0x80
	},
	{
		label: 'FLIPRGOFF[]',
		kind: CompletionItemKind.Text,
		data: 0x82
	},
	{
		label: 'FLIPRGON[]',
		kind: CompletionItemKind.Text,
		data: 0x81
	},
	{
		label: 'FLOOR[]',
		kind: CompletionItemKind.Text,
		data: 0x66
	},
	{
		label: 'GC[N]',
		kind: CompletionItemKind.Text,
		data: 0x46
	},
	{
		label: 'GETINFO[]',
		kind: CompletionItemKind.Text,
		data: 0x88
	},
	{
		label: 'GETVARIATION[]',
		kind: CompletionItemKind.Text,
		data: 0x91
	},
	{
		label: 'GFV[]',
		kind: CompletionItemKind.Text,
		data: 0xd
	},
	{
		label: 'GPV[]',
		kind: CompletionItemKind.Text,
		data: 0xc
	},
	{
		label: 'GT[]',
		kind: CompletionItemKind.Text,
		data: 0x52
	},
	{
		label: 'GTEQ[]',
		kind: CompletionItemKind.Text,
		data: 0x53
	},
	{
		label: 'IDEF[]',
		kind: CompletionItemKind.Text,
		data: 0x89
	},
	{
		label: 'IF[]',
		kind: CompletionItemKind.Text,
		data: 0x58
	},
	{
		label: 'INSTCTRL[]',
		kind: CompletionItemKind.Text,
		data: 0x8e
	},
	{
		label: 'IP[]',
		kind: CompletionItemKind.Text,
		data: 0x39
	},
	{
		label: 'ISECT[]',
		kind: CompletionItemKind.Text,
		data: 0xf
	},
	{
		label: 'IUP[Y]',
		kind: CompletionItemKind.Text,
		data: 0x30
	},
	{
		label: 'JMPR[]',
		kind: CompletionItemKind.Text,
		data: 0x1c
	},
	{
		label: 'JROF[]',
		kind: CompletionItemKind.Text,
		data: 0x79
	},
	{
		label: 'JROT[]',
		kind: CompletionItemKind.Text,
		data: 0x78
	},
	{
		label: 'LOOPCALL[]',
		kind: CompletionItemKind.Text,
		data: 0x2a
	},
	{
		label: 'LT[]',
		kind: CompletionItemKind.Text,
		data: 0x50
	},
	{
		label: 'LTEQ[]',
		kind: CompletionItemKind.Text,
		data: 0x51
	},
	{
		label: 'MAX[]',
		kind: CompletionItemKind.Text,
		data: 0x8b
	},
	{
		label: 'MD[N]',
		kind: CompletionItemKind.Text,
		data: 0x49
	},
	{
		label: 'MDAP[R]',
		kind: CompletionItemKind.Text,
		data: 0x2e
	},
	{
		label: 'MDRP[M>RBl]',
		kind: CompletionItemKind.Text,
		data: 0xc0
	},
	{
		label: 'MIAP[R]',
		kind: CompletionItemKind.Text,
		data: 0x3e
	},
	{
		label: 'MIN[]',
		kind: CompletionItemKind.Text,
		data: 0x8c
	},
	{
		label: 'MINDEX[]',
		kind: CompletionItemKind.Text,
		data: 0x26
	},
	{
		label: 'MIRP[M>RBl]',
		kind: CompletionItemKind.Text,
		data: 0xe0
	},
	{
		label: 'MPPEM[]',
		kind: CompletionItemKind.Text,
		data: 0x4b
	},
	{
		label: 'MPS[]',
		kind: CompletionItemKind.Text,
		data: 0x4c
	},
	{
		label: 'MSIRP[M]',
		kind: CompletionItemKind.Text,
		data: 0x3a
	},
	{
		label: 'MUL[]',
		kind: CompletionItemKind.Text,
		data: 0x63
	},
	{
		label: 'NEG[]',
		kind: CompletionItemKind.Text,
		data: 0x65
	},
	{
		label: 'NEQ[]',
		kind: CompletionItemKind.Text,
		data: 0x55
	},
	{
		label: 'NOT[]',
		kind: CompletionItemKind.Text,
		data: 0x5c
	},
	{
		label: 'NROUND[Gr]',
		kind: CompletionItemKind.Text,
		data: 0x6c
	},
	{
		label: 'ODD[]',
		kind: CompletionItemKind.Text,
		data: 0x56
	},
	{
		label: 'OR[]',
		kind: CompletionItemKind.Text,
		data: 0x5b
	},
	{
		label: 'POP[]',
		kind: CompletionItemKind.Text,
		data: 0x21
	},
	{
		label: 'RCVT[]',
		kind: CompletionItemKind.Text,
		data: 0x45
	},
	{
		label: 'RDTG[]',
		kind: CompletionItemKind.Text,
		data: 0x7d
	},
	{
		label: 'ROFF[]',
		kind: CompletionItemKind.Text,
		data: 0x7a
	},
	{
		label: 'ROLL[]',
		kind: CompletionItemKind.Text,
		data: 0x8a
	},
	{
		label: 'ROUND[Gr]',
		kind: CompletionItemKind.Text,
		data: 0x68
	},
	{
		label: 'RS[]',
		kind: CompletionItemKind.Text,
		data: 0x43
	},
	{
		label: 'RTDG[]',
		kind: CompletionItemKind.Text,
		data: 0x3d
	},
	{
		label: 'RTG[]',
		kind: CompletionItemKind.Text,
		data: 0x18
	},
	{
		label: 'RTHG[]',
		kind: CompletionItemKind.Text,
		data: 0x19
	},
	{
		label: 'RUTG[]',
		kind: CompletionItemKind.Text,
		data: 0x7c
	},
	{
		label: 'S45ROUND[]',
		kind: CompletionItemKind.Text,
		data: 0x77
	},
	{
		label: 'SANGW[]',
		kind: CompletionItemKind.Text,
		data: 0x7e
	},
	{
		label: 'SCANCTRL[]',
		kind: CompletionItemKind.Text,
		data: 0x85
	},
	{
		label: 'SCANTYPE[]',
		kind: CompletionItemKind.Text,
		data: 0x8d
	},
	{
		label: 'SCFS[]',
		kind: CompletionItemKind.Text,
		data: 0x48
	},
	{
		label: 'SCVTCI[]',
		kind: CompletionItemKind.Text,
		data: 0x1d
	},
	{
		label: 'SDB[]',
		kind: CompletionItemKind.Text,
		data: 0x5e
	},
	{
		label: 'SDPVTL[r]',
		kind: CompletionItemKind.Text,
		data: 0x86
	},
	{
		label: 'SDS[]',
		kind: CompletionItemKind.Text,
		data: 0x5f
	},
	{
		label: 'SFVFS[]',
		kind: CompletionItemKind.Text,
		data: 0xb
	},
	{
		label: 'SFVTCA[Y]',
		kind: CompletionItemKind.Text,
		data: 0x4
	},
	{
		label: 'SFVTL[r]',
		kind: CompletionItemKind.Text,
		data: 0x8
	},
	{
		label: 'SFVTPV[]',
		kind: CompletionItemKind.Text,
		data: 0xe
	},
	{
		label: 'SHC[2]',
		kind: CompletionItemKind.Text,
		data: 0x34
	},
	{
		label: 'SHP[2]',
		kind: CompletionItemKind.Text,
		data: 0x32
	},
	{
		label: 'SHPIX[]',
		kind: CompletionItemKind.Text,
		data: 0x38
	},
	{
		label: 'SHZ[2]',
		kind: CompletionItemKind.Text,
		data: 0x36
	},
	{
		label: 'SLOOP[]',
		kind: CompletionItemKind.Text,
		data: 0x17
	},
	{
		label: 'SMD[]',
		kind: CompletionItemKind.Text,
		data: 0x1a
	},
	{
		label: 'SPVFS[]',
		kind: CompletionItemKind.Text,
		data: 0xa
	},
	{
		label: 'SPVTCA[Y]',
		kind: CompletionItemKind.Text,
		data: 0x2
	},
	{
		label: 'SPVTL[r]',
		kind: CompletionItemKind.Text,
		data: 0x6
	},
	{
		label: 'SROUND[]',
		kind: CompletionItemKind.Text,
		data: 0x76
	},
	{
		label: 'SRP0[]',
		kind: CompletionItemKind.Text,
		data: 0x10
	},
	{
		label: 'SRP1[]',
		kind: CompletionItemKind.Text,
		data: 0x11
	},
	{
		label: 'SRP2[]',
		kind: CompletionItemKind.Text,
		data: 0x12
	},
	{
		label: 'SSW[]',
		kind: CompletionItemKind.Text,
		data: 0x1f
	},
	{
		label: 'SSWCI[]',
		kind: CompletionItemKind.Text,
		data: 0x1e
	},
	{
		label: 'SUB[]',
		kind: CompletionItemKind.Text,
		data: 0x61
	},
	{
		label: 'SVTCA[Y]',
		kind: CompletionItemKind.Text,
		data: 0x0
	},
	{
		label: 'SWAP[]',
		kind: CompletionItemKind.Text,
		data: 0x23
	},
	{
		label: 'SZP0[]',
		kind: CompletionItemKind.Text,
		data: 0x13
	},
	{
		label: 'SZP1[]',
		kind: CompletionItemKind.Text,
		data: 0x14
	},
	{
		label: 'SZP2[]',
		kind: CompletionItemKind.Text,
		data: 0x15
	},
	{
		label: 'SZPS[]',
		kind: CompletionItemKind.Text,
		data: 0x16
	},
	{
		label: 'UTP[]',
		kind: CompletionItemKind.Text,
		data: 0x29
	},
	{
		label: 'WCVTF[]',
		kind: CompletionItemKind.Text,
		data: 0x70
	},
	{
		label: 'WCVTP[]',
		kind: CompletionItemKind.Text,
		data: 0x44
	},
	{
		label: 'WS[]',
		kind: CompletionItemKind.Text,
		data: 0x42
	}
];
