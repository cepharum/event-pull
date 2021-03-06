/**
 * (c) 2019 cepharum GmbH, Berlin, http://cepharum.de
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 cepharum GmbH
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author: cepharum
 */

"use strict";

const EventEmitter = require( "events" );

let eventId = 0;

/**
 * Wraps description of single event.
 */
class Event extends EventEmitter {
	/**
	 * @param {string} name name of event
	 * @param {Array} eventArguments list of arguments customizing event
	 * @param {object} eventOptions options customizing created event's behaviour
	 */
	constructor( name, eventArguments = [], eventOptions = {} ) {
		if ( !name || typeof name !== "string" ) {
			throw new TypeError( "invalid event name" );
		}

		if ( !Array.isArray( eventArguments ) ) {
			throw new TypeError( "invalid set of event arguments" );
		}

		super();

		Object.defineProperties( this, {
			/**
			 * Exposes unique numeric ID of event.
			 *
			 * @name Event#id
			 * @property {int}
			 * @readonly
			 */
			id: { value: ++eventId, enumerable: true },

			/**
			 * Exposes name of event.
			 *
			 * @name Event#name
			 * @property {string}
			 * @readonly
			 */
			name: { value: name, enumerable: true },

			/**
			 * Exposes arguments customizing event.
			 *
			 * An event's arguments are basically meant to customize the event's
			 * handlers listening for this event.
			 *
			 * @name Event#arguments
			 * @property {Array}
			 * @readonly
			 */
			arguments: { value: eventArguments, enumerable: true },

			/**
			 * Exposes options customizing event's behaviour.
			 *
			 * An event's options are meant to customize the event's handling by
			 * with regards to its dispatching.
			 *
			 * @name Event#options
			 * @property {object}
			 * @readonly
			 */
			options: { value: eventOptions, enumerable: true },
		} );
	}
}

module.exports = Event;
